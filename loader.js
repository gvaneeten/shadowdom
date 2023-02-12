class EmbeddedWebview extends HTMLElement {
    connectedCallback() {
        fetch(this.getAttribute('src'))
            .then(response => response.text())
            .then(html => {
                const shadow = this.attachShadow({ mode: 'closed' });
                const wrapper = document.createElement("span");
                const script = document.createElement("script");
                //script.src = "component.js";
                script.textContent = 'function() { self={}; self.vcm = (function () { alert("blue"); })();'
                wrapper.innerHTML = html;
                shadow.appendChild(script);
                shadow.appendChild(wrapper);
            });
    }
}


self.vcm = (function () {

    alert('red');
});
window.customElements.define(
    'embedded-webview',
    EmbeddedWebview
);
