import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import PaginationItem from '../components/PaginationItem';

describe('<PaginationItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PaginationItem />);
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

  describe('when given a prop', () => {
    it('renders active class', () => {
      wrapper.setProps({ active: true });
      expect(wrapper.hasClass('PaginationItem--active')).toBeTruthy();
    });

    it('renders disabled class', () => {
      wrapper.setProps({ disabled: true });
      expect(wrapper.hasClass('PaginationItem--disabled')).toBeTruthy();
    });

    it('renders outline class [previous]', () => {
      wrapper.setProps({ previous: true });
      expect(wrapper.hasClass('PaginationItem--outline')).toBeTruthy();
    });

    it('renders outline class [next]', () => {
      wrapper.setProps({ next: true });
      expect(wrapper.hasClass('PaginationItem--outline')).toBeTruthy();
    });

    it('renders chevron left [previous]', () => {
      wrapper = mount(<PaginationItem previous />);
      expect(wrapper.contains(<MdChevronLeft />)).toBeTruthy();
    });

    it('renders chevron right [next]', () => {
      wrapper = mount(<PaginationItem next />);
      expect(wrapper.contains(<MdChevronRight />)).toBeTruthy();
    });
  });
});
