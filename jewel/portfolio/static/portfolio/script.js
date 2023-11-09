// Menu

const Menu = props => {
    return (
      React.createElement("div", { className: `menu-container ${props.showMenu}` }, 
      React.createElement("div", { className: "overlay" }), 
      React.createElement("div", { className: "menu-items" }, 
      React.createElement("ul", null, 
      React.createElement("li", null, 
      React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), 
  
  
  
      React.createElement("li", null, 
      React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), 
  
  
  
      React.createElement("li", null, 
      React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), 
  
  
  
      React.createElement("li", null, 
      React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), 
  
  
  
  
      React.createElement(SocialLinks, null))));
  
  
  
  };