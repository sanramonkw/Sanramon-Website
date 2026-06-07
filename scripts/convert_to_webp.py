"""Convert raster images under assets/ to WebP and update project references."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
SOURCE_EXTS = {".png", ".jpg", ".jpeg", ".gif"}
TEXT_DIRS = [ROOT, ROOT / "css", ROOT / "js"]
QUALITY = 85


def convert_image(src: Path) -> Path:
    dst = src.with_suffix(".webp")
    with Image.open(src) as im:
        if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
            im = im.convert("RGBA")
        elif im.mode != "RGB":
            im = im.convert("RGB")
        im.save(dst, "WEBP", quality=QUALITY, method=6)
    return dst


def rel_posix(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def main() -> None:
    converted: dict[str, str] = {}

    for src in sorted(ASSETS.rglob("*")):
        if not src.is_file() or src.suffix.lower() not in SOURCE_EXTS:
            continue
        dst = convert_image(src)
        old_rel = rel_posix(src)
        new_rel = rel_posix(dst)
        converted[old_rel] = new_rel
        print(f"converted: {old_rel} -> {new_rel}")

    if not converted:
        print("No images to convert.")
        return

    text_files: list[Path] = []
    for base in TEXT_DIRS:
        if not base.exists():
            continue
        text_files.extend(base.glob("*.html"))
        text_files.extend(base.glob("*.css"))
        text_files.extend(base.glob("*.js"))

    for file in sorted(set(text_files)):
        content = file.read_text(encoding="utf-8")
        updated = content
        for old, new in sorted(converted.items(), key=lambda item: -len(item[0])):
            updated = updated.replace(old, new)
            old_enc = old.replace("&", "%26")
            new_enc = new.replace("&", "%26")
            if old_enc != old:
                updated = updated.replace(old_enc, new_enc)
        updated = updated.replace('type="image/png"', 'type="image/webp"')
        if updated != content:
            file.write_text(updated, encoding="utf-8")
            print(f"updated refs: {file.relative_to(ROOT)}")

    for old_rel in converted:
        (ROOT / old_rel).unlink(missing_ok=True)

    print(f"Done. Converted {len(converted)} image(s).")


if __name__ == "__main__":
    main()
