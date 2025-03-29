document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('[data-dropdown-toggle]');
  const dropdownList = document.querySelector('.nav__list');
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target)) {
      dropdownList.classList.remove('active');
      dropdownToggle.classList.remove('active');
      dropdownToggle.textContent = 'תפריט';
    }
  });

  // Toggle dropdown on button click
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownList.classList.toggle('active');
    dropdownToggle.classList.toggle('active');
    dropdownToggle.textContent = dropdownList.classList.contains('active') ? 'סגור' : 'תפריט';
  });
}); 