import CardBody from '../components/CardBody';

describe('<CardBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardBody />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('renders additional classNames', () => {
    wrapper.setProps({ className: 'my-class' });
    expect(wrapper.hasClass('my-class')).toBeTruthy();
  });

  it("doesn't render num span without a prop", () => {
    expect(wrapper.find('.CardBody__num')).toHaveLength(0);
  });

  it('renders num span when given a prop', () => {
    wrapper.setProps({ num: '#001' });
    expect(wrapper.find('.CardBody__num')).toHaveLength(1);
  });

  it('renders num text when given a prop', () => {
    wrapper.setProps({ num: '#001' });
    expect(wrapper.find('.CardBody__num').text()).toBe('#001');
  });

  it("doesn't render heading without a prop", () => {
    expect(wrapper.find('.CardBody__heading')).toHaveLength(0);
  });

  it('renders heading when given a prop', () => {
    wrapper.setProps({ heading: 'Bulbasaur' });
    expect(wrapper.find('.CardBody__heading')).toHaveLength(1);
  });

  it('renders heading text when given a prop', () => {
    wrapper.setProps({ heading: 'Bulbasaur' });
    expect(wrapper.find('.CardBody__heading').text()).toBe('Bulbasaur');
  });
});
