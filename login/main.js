// ------- 1. 탭 메뉴 구현 -------
const memTab = document.querySelector('.memberTab');
const nomemTab = document.querySelector('.nonMemberTab');
const memCont = document.querySelectorAll('.member');
const nomemCont = document.querySelectorAll('.nonMember');

memTab.addEventListener('click', (e) => {
  e.preventDefault();

  memTab.classList.add('active');
  nomemTab.classList.remove('active');

  memCont.forEach((el) => el.classList.add('active'));
  nomemCont.forEach((el) => el.classList.remove('active'));
});

nomemTab.addEventListener('click', (e) => {
  e.preventDefault();

  nomemTab.classList.add('active');
  memTab.classList.remove('active');

  nomemCont.forEach((el) => el.classList.add('active'));
  memCont.forEach((el) => el.classList.remove('active'));
});

// ------- 2. 체크박스 구현 -------
document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('label');

  labels.forEach((label) => {
    const checkbox = label.querySelector('input[type="checkbox"]');
    const icon = label.querySelector('.icon');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        icon.classList.add('checkIcon');
      } else {
        icon.classList.remove('checkIcon');
      }
    });

    icon.addEventListener('click', (e) => {
      e.preventDefault();
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change')); // 이벤트 강제 발생시키기 위한 함수
    });
  });
});

// ------- 3. 로그인 경고 구현 -------
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.loginBtn');
  const inputs = document.querySelectorAll('.idpw');
  const warnings = document.querySelectorAll('.warnTxt');

  const id = inputs[0];
  const pw = inputs[1];
  const idWarn = warnings[0];
  const pwWarn = warnings[1];

  inputs.forEach((input, idx) => {
    input.addEventListener('focus', () => {
      input.classList.remove('error');
      warnings[idx].classList.remove('error');
    });
  });

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (id.value.trim() === '') {
      id.classList.add('error');
      idWarn.classList.add('error');

      pw.classList.remove('error');
      pwWarn.classList.remove('error');
      return; // 리턴을 안하면 비활성화 안됨
    } else {
      id.classList.remove('error');
      idWarn.classList.remove('error');
    }

    if (pw.value.trim() === '') {
      pw.classList.add('error');
      pwWarn.classList.add('error');
    } else {
      pw.classList.remove('error');
      pwWarn.classList.remove('error');
    }
  });
});

// ------- 4. placeholder 블러 처리 --------
$input = document.querySelectorAll('.idpw');
$input.forEach((ph) => {
  ph.addEventListener('focus', () => {
    ph.setAttribute('data-placeholder', ph.placeholder);
    ph.placeholder = '';
  });

  ph.addEventListener('blur', () => {
    ph.placeholder = ph.getAttribute('data-placeholder');
  });
});

// 5. 아이디 저장 경고
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.loginBtn');
  const $wrap = document.getElementById('wrap');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const idValue = $input[0].value.trim();
    const pwValue = $input[1].value.trim();

    if (idValue !== '' && pwValue !== '') {
      alert('유효한 접근이 아닙니다! 다시 시도해 주세요.');
    }
  });
});
