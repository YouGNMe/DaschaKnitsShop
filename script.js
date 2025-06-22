document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeModal = document.getElementById('closeModal');
  let currentProduct = null;

 const productData = {
  1: {
    img: 'pictures/picture3.png',
    title: 'Patterned Beanie',
    desc: 'Material: 100% wool. Hand wash only. Do not tumble dry.',
  },
  2: {
    img: 'pictures/picture5.png',
    title: 'Green Cardigan',
    desc: 'Material: 80% merino, 20% acrylic. Wash at 30°C.',
  },
  3: {
    img: 'pictures/picture7.png',
    title: 'Cozy Socks',
    desc: 'Material: 60% wool, 40% cotton. Suitable for sensitive skin.',
  },
  4: {
    img: 'pictures/picture1.png',
    title: 'Knitted Sweater',
    desc: 'Material: 60% wool, 40% cotton. Gentle on sensitive skin.',
  },
};


 
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-product');
      const product = productData[id];
      if (product) {
        currentProduct = product; // сохраняем выбранный товар

        modalImg.src = product.img;
        modalImg.alt = product.title;
        modalTitle.textContent = product.title;
        modalDesc.textContent = product.desc;
        modal.classList.remove('hidden');
      }
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  orderBtn.addEventListener('click', () => {
    if (currentProduct) {
      // Вариант 1: alert
      // alert(`Вы хотите заказать: ${currentProduct.title}`);

      // Вариант 2: открыть другую страницу с товаром
      window.location.href = `order.html?item=${encodeURIComponent(currentProduct.title)}`;
    }
  });
});

orderBtn.addEventListener('click', () => {
  if (currentProduct) {
    const title = encodeURIComponent(currentProduct.title);
    window.location.href = `order.html?item=${title}`;
  }
});