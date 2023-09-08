const faq_cat = document.getElementById('faq-cat');
  const faq_block = document.getElementById('faq-block');

  let current_faq_cat = faq_cat.childNodes[1];
  current_faq_cat.classList.add('active');
  faq_block.childNodes[1].classList.add('active');

  function handleFaqItemClick(e) {
    e.classList.add('active');
    faq_cat.childNodes.forEach((child, key) => {
      if(child.innerHTML !== undefined){
        const temp = child.innerHTML.trim();
        if (temp === current_faq_cat.innerHTML.trim()) {
          faq_block.childNodes[key].classList.remove('active');
        } else if (temp === e.innerHTML.trim()) {
          faq_block.childNodes[key].classList.add('active');
        } 
      }
    });
    if(current_faq_cat.innerHTML){
      current_faq_cat.classList.remove('active');
    }

    if(current_faq_cat.innerHTML.trim() === e.innerHTML.trim()){
      current_faq_cat.classList.remove('active');
      current_faq_cat = current_faq_cat.cloneNode();
      current_faq_cat.innerHTML = '';
    }
    else{
      current_faq_cat = e;
    }
  }
  function handleFaqQClick(e) {
    e
      .nextSibling
      .nextSibling
      .classList
      .toggle('active');
    e.childNodes[1].classList.toggle('active');
  }