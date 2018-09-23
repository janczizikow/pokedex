import Card from '../components/Card';

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
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

  it('renders custom Tag', () => {
    wrapper.setProps({ tag: 'a' });
    expect(wrapper.type()).toBe('a');
  });
});
