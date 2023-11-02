
  
  function opentab(tabname) {
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
      tabcontents[i].classList.remove("active-tab");
    }

    for (let i = 0; i < tablinks.length; i++) {
      if (tablinks[i].getAttribute("onclick") === "opentab('" + tabname + "')") {
        tablinks[i].classList.add("active-link");
        tabcontents[i].classList.add("active-tab");
      }
    }
  }

  let tablinks = document.getElementsByClassName("tab-links");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function() {
      let tabname = this.getAttribute("onclick").match(/'(.*?)'/)[1];
      opentab(tabname);
    });
  }

