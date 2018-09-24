import Pagination from '../components/Pagination';

describe('<Pagination />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pagination />);
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
    wrapper.setProps({ tag: 'ul' });
    expect(wrapper.type()).toBe('ul');
  });
});
