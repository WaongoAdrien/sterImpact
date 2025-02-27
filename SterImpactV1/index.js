//https://forms.gle/rLLZLK7PRT8vzW8w5

const btn = document.getElementById("#apply");

function apply() {
    window.location.href = "formA.html";
}

btn.addEventListener('click', (e) => {
    e.preventDefault;
    apply()
});