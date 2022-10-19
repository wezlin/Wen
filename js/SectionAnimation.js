
      let Sections = document.querySelectorAll(".section");// 取出所有有class = section的元件

      window.addEventListener("scroll", checkSections);
      checkSections();

      function checkSections() {
        let triggerBottom = window.innerHeight ; //取瀏覽器的bottom 位置
        Sections.forEach((section) => {
          const SectionTop = section.getBoundingClientRect().top; //取section的top位置

          if (SectionTop < triggerBottom) { // 如果該元件的box的 top 小於 瀏覽器的bottom 位置, 
            section.classList.add("show");  //該元件就增加show 的選擇器
          } else {
            section.classList.remove("show"); //否則該元件就移除show 的選擇棄
          }
        });
      }

