document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeModal = document.getElementById('closeModal');
  let currentProduct = null;

  const productData = {
    1: {
      img: 'pictures/dog.png',
      title: 'Шапочка с узором',
      desc: 'Состав: 100% шерсть. Ручная стирка. Не сушить в машине.',
    },
    2: {
      img: 'pictures/happy.png',
      title: 'Зелёный кардиган',
      desc: 'Состав: 80% меринос, 20% акрил. Стирка при 30°C.',
    },
    3: {
      img: 'pictures/raccoon.png',
      title: 'Уютные носочки',
      desc: 'Состав: 60% шерсть, 40% хлопок. Подходят для чувствительной кожи.'
    },
    4: {
      img: 'pictures/turtle.png',
      title: 'Уютные носочки',
      desc: 'Состав: 60% шерсть, 40% хлопок. Подходят для чувствительной кожи.'
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