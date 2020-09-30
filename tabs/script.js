const tabs = (wrapperTabsSelector, tabsSelector, contentSelector, activeClass) => {

    const wrapperTabs = document.querySelector(wrapperTabsSelector),
          tabs = document.querySelectorAll(tabsSelector),
          contents = document.querySelectorAll(contentSelector);

    function showTabsContent(i = 0){
        contents[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    function hideTabsContent(){
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
        contents.forEach(item => {
            item.style.display = 'none';
        });
    }
    hideTabsContent();
    showTabsContent();

    wrapperTabs.addEventListener('click', (e) => {
        const target = e.target;
        if(target){

            if(target.classList.contains(tabsSelector.replace(/\./, '')) || 
              target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))){
                console.log(target);
                tabs.forEach((item, i) => {
                    if(item === target || item === target.parentNode) {
                        hideTabsContent();
                        showTabsContent(i);
                    }
                });
            }
        }
    });
};