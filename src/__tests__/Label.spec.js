import Label from '../components/Label';

describe('<Label />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Label />);
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

  it('renders color class when given a prop', () => {
    wrapper.setProps({ color: 'fire' });
    expect(wrapper.hasClass('Label--fire')).toBeTruthy();
  });
});
