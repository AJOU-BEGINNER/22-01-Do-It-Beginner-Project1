export default function Hi(el) {
  const target = el;

  const template = () => {
    return `
        <div>header</div>
        <div>body</div>
        <div>footer</div>
    `;
  };

  const render = () => {
    target.innerHTML = template();
    addEvent();
  };

  const addEvent = () => {};

  return render;
}
