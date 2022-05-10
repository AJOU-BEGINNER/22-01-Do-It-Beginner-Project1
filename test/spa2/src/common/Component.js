export default class Component {
  $target;
  $state;

  constructor(target, state) {
    this.$target = target;
    this.$state = state;

    this.render();
  }

  template() {
    return `<div>hi</div>`;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
