const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
})

// 검색창 요소 내부 실제 input 요소에 포커스가 되면 실행
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색')
})

// 검색창 요소 내부 실제 input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',"");
})

// 올해가 몇년도인지 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()