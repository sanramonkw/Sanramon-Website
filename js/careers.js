(function () {
  const CONTACT_EMAIL = 'info@sanramonkw.com';
  const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
  const MAX_CV_BYTES = 5 * 1024 * 1024;
  const CV_EXT = ['.pdf', '.doc', '.docx'];
  const CV_MIME = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const form = document.getElementById('career-form');
  const success = document.getElementById('form-success');
  const fileInput = document.getElementById('f-cv');
  const zone = document.getElementById('upload-zone');
  const filename = document.getElementById('upload-filename');
  const submitBtn = document.getElementById('btn-submit');
  const formAlert = document.getElementById('form-alert');

  const fields = {
    name: document.getElementById('f-name'),
    email: document.getElementById('f-email'),
    phone: document.getElementById('f-phone'),
    sector: document.getElementById('f-sector'),
    cv: fileInput,
  };

  const errEls = {
    name: document.getElementById('err-name'),
    email: document.getElementById('err-email'),
    phone: document.getElementById('err-phone'),
    sector: document.getElementById('err-sector'),
    cv: document.getElementById('err-cv'),
  };

  function lang() {
    return window.SR_I18N ? window.SR_I18N.getLang() : 'en';
  }

  function msg(key) {
    if (lang() === 'ar' && window.SR_TRANSLATIONS_AR && window.SR_TRANSLATIONS_AR[key]) {
      return window.SR_TRANSLATIONS_AR[key];
    }
    const en = {
      'careers.form.err.name': 'Please enter your full name.',
      'careers.form.err.email': 'Please enter a valid email address.',
      'careers.form.err.phone': 'Please enter your mobile number.',
      'careers.form.err.phoneInvalid': 'Please enter a valid phone number (at least 8 digits).',
      'careers.form.err.sector': 'Please select a sector of interest.',
      'careers.form.err.cv': 'Please upload your CV.',
      'careers.form.err.cvType': 'CV must be a PDF, DOC, or DOCX file.',
      'careers.form.err.cvSize': 'CV must be 5 MB or smaller.',
      'careers.form.err.submit': 'Something went wrong. Please try again or email us directly.',
      'careers.form.sending': 'Sending…',
      'careers.form.submit': 'Submit Application',
    };
    return en[key] || key;
  }

  function setFieldError(key, text) {
    const wrap = document.querySelector(`[data-field="${key}"]`);
    const err = errEls[key];
    if (wrap) wrap.classList.toggle('is-invalid', Boolean(text));
    if (key === 'cv') zone.classList.toggle('is-invalid', Boolean(text));
    if (err) err.textContent = text || '';
  }

  function clearErrors() {
    Object.keys(errEls).forEach((k) => setFieldError(k, ''));
    if (formAlert) {
      formAlert.hidden = true;
      formAlert.textContent = '';
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 8 && digits.length <= 15;
  }

  function cvFileOk(file) {
    if (!file) return { ok: false, key: 'careers.form.err.cv' };
    const name = file.name.toLowerCase();
    const extOk = CV_EXT.some((ext) => name.endsWith(ext));
    const mimeOk = !file.type || CV_MIME.includes(file.type);
    if (!extOk && !mimeOk) return { ok: false, key: 'careers.form.err.cvType' };
    if (file.size > MAX_CV_BYTES) return { ok: false, key: 'careers.form.err.cvSize' };
    return { ok: true };
  }

  function validate() {
    clearErrors();
    let valid = true;

    const name = fields.name.value.trim();
    if (!name || name.length < 2) {
      setFieldError('name', msg('careers.form.err.name'));
      valid = false;
    }

    const email = fields.email.value.trim();
    if (!email || !isValidEmail(email)) {
      setFieldError('email', msg('careers.form.err.email'));
      valid = false;
    }

    const phone = fields.phone.value.trim();
    if (!phone) {
      setFieldError('phone', msg('careers.form.err.phone'));
      valid = false;
    } else if (!isValidPhone(phone)) {
      setFieldError('phone', msg('careers.form.err.phoneInvalid'));
      valid = false;
    }

    const sector = fields.sector.value.trim();
    if (!sector) {
      setFieldError('sector', msg('careers.form.err.sector'));
      valid = false;
    }

    const cvCheck = cvFileOk(fileInput.files[0]);
    if (!cvCheck.ok) {
      setFieldError('cv', msg(cvCheck.key));
      valid = false;
    }

    return valid;
  }

  function showFileSelected(file) {
    if (!file) return;
    zone.classList.add('has-file');
    filename.style.display = 'block';
    filename.textContent = '✓ ' + file.name;
    const uploadText = zone.querySelector('.upload-text');
    const uploadHint = zone.querySelector('.upload-hint');
    if (uploadText) uploadText.style.display = 'none';
    if (uploadHint) uploadHint.style.display = 'none';
    setFieldError('cv', '');
  }

  function resetFileUI() {
    zone.classList.remove('has-file');
    filename.style.display = 'none';
    filename.textContent = '';
    const uploadText = zone.querySelector('.upload-text');
    const uploadHint = zone.querySelector('.upload-hint');
    if (uploadText) uploadText.style.display = '';
    if (uploadHint) uploadHint.style.display = '';
  }

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) {
      resetFileUI();
      return;
    }
    const check = cvFileOk(file);
    if (!check.ok) {
      fileInput.value = '';
      resetFileUI();
      setFieldError('cv', msg(check.key));
      return;
    }
    showFileSelected(file);
  });

  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.style.borderColor = 'rgba(201,169,110,.8)';
  });
  zone.addEventListener('dragleave', () => {
    zone.style.borderColor = '';
  });
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const dt = new DataTransfer();
    dt.items.add(file);
    fileInput.files = dt.files;
    fileInput.dispatchEvent(new Event('change', { bubbles: true }));
  });

  ['input', 'blur'].forEach((evt) => {
    form.addEventListener(
      evt,
      (e) => {
        const t = e.target;
        if (!t.matches('#f-name, #f-email, #f-phone, #f-sector')) return;
        const key = t.id.replace('f-', '');
        if (key === 'name' && t.value.trim().length >= 2) setFieldError('name', '');
        if (key === 'email' && isValidEmail(t.value.trim())) setFieldError('email', '');
        if (key === 'phone' && isValidPhone(t.value.trim())) setFieldError('phone', '');
        if (key === 'sector' && t.value.trim()) setFieldError('sector', '');
      },
      true
    );
  });

  function setSubmitting(busy) {
    submitBtn.disabled = busy;
    submitBtn.classList.toggle('is-loading', busy);
    const label = submitBtn.querySelector('.btn-submit-txt');
    if (label) {
      if (!label.dataset.defaultText) label.dataset.defaultText = label.textContent;
      label.textContent = busy ? msg('careers.form.sending') : label.dataset.defaultText;
    }
  }

  function showSuccess() {
    form.style.opacity = '0';
    form.style.transform = 'translateY(16px)';
    form.style.transition = 'opacity .4s, transform .4s';
    setTimeout(() => {
      form.style.display = 'none';
      success.classList.add('show');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 400);
  }

  async function submitForm(e) {
    e.preventDefault();
    if (!validate()) {
      const firstInvalid = form.querySelector('.is-invalid input, .is-invalid select, .is-invalid .upload-zone');
      if (firstInvalid) firstInvalid.focus({ preventScroll: false });
      return;
    }

    setSubmitting(true);

    const fd = new FormData();
    fd.append('name', fields.name.value.trim());
    fd.append('email', fields.email.value.trim());
    fd.append('phone', fields.phone.value.trim());
    fd.append('message', document.getElementById('f-message').value.trim());
    fd.append('sector', fields.sector.value);
    fd.append('attachment', fileInput.files[0]);
    fd.append('_subject', 'New careers application — San Ramon website');
    fd.append('_template', 'table');
    fd.append('_captcha', 'false');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Submit failed');
      }
      showSuccess();
    } catch {
      if (formAlert) {
        formAlert.hidden = false;
        formAlert.textContent = msg('careers.form.err.submit');
      }
      setSubmitting(false);
    }
  }

  form.addEventListener('submit', submitForm);

  document.addEventListener('langchange', () => {
    Object.keys(errEls).forEach((k) => {
      const wrap = document.querySelector(`[data-field="${k}"]`);
      if (wrap && wrap.classList.contains('is-invalid') && errEls[k].textContent) {
        const keys = {
          name: 'careers.form.err.name',
          email: 'careers.form.err.email',
          phone: fields.phone.value.trim() && !isValidPhone(fields.phone.value.trim())
            ? 'careers.form.err.phoneInvalid'
            : 'careers.form.err.phone',
          sector: 'careers.form.err.sector',
          cv: errEls.cv.textContent && fileInput.files[0]
            ? (cvFileOk(fileInput.files[0]).key || 'careers.form.err.cv')
            : 'careers.form.err.cv',
        };
        if (keys[k]) setFieldError(k, msg(keys[k]));
      }
    });
    const label = submitBtn.querySelector('.btn-submit-txt');
    if (label && !submitBtn.disabled) {
      label.dataset.defaultText = msg('careers.form.submit');
      label.textContent = label.dataset.defaultText;
    }
  });
})();
