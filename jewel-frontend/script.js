/**
 * Define a property on an object, or update its value if the property already exists.
 * If the property doesn't exist, it will be added to the object.
 *
 * @param {Object} obj - The object to which the property will be added or updated.
 * @param {string} key - The name of the property.
 * @param {*} value - The value to set for the property.
 * @returns {Object} - The modified object.
 */
function defineProperty(obj, key, value) {
    if (key in obj) {
      // If the property already exists, update its value
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      // If the property doesn't exist, add it to the object
      obj[key] = value;
    }
  
    return obj;
  }

//   Menu

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
  
//   Nav


const Nav = props => {
    return (
      React.createElement(React.Fragment, null, 
      React.createElement("nav", { id: "navbar" }, 
      React.createElement("div", { className: "nav-wrapper" }, 
      React.createElement("p", { className: "brand" }, "Ja", 
  
      React.createElement("strong", null, "W\iL")), 
  
      React.createElement("a", {
        onClick: props.toggleMenu,
        className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, 
  
      React.createElement("span", null))))));
  
  
  
  
  
  };
  
  
  
  /***********************
    Header Component
   ***********************/
  
  const Header = props => {
    return (
      React.createElement("header", { id: "welcome-section" }, 
      React.createElement("div", { className: "forest" }), 
      React.createElement("div", { className: "silhouette" }), 
      React.createElement("div", { className: "moon" }), 
      React.createElement("div", { className: "container" }, 
      React.createElement("h1", null, 
      React.createElement("span", { className: "line" }, "I do"), 
      React.createElement("span", { className: "line" }, "backend dev"), 
      React.createElement("span", { className: "line" }, 
      React.createElement("span", { className: "color" }, "&"), "write.")), 
  
  
      React.createElement("div", { className: "buttons" }, 
      React.createElement("a", { href: "#projects" }, "my portfolio"), 
      React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));
  
  
  
  
  
  
  };