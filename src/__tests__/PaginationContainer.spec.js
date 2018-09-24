import { Pagination } from '../containers/Pagination/Pagination';
import PaginationUI from '../components/Pagination';
import PaginationItem from '../components/PaginationItem';

describe('<Pagination /> (container)', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pagination />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders <PaginationUI /> with pagination prop', () => {
    wrapper.setProps({ pagination: { next: 1 } });
    expect(wrapper.find(PaginationUI)).toHaveLength(1);
  });
  it('renders link to previous page with prev pagination prop', () => {
    wrapper.setProps({ pagination: { prev: 1 } });
    expect(wrapper.find(PaginationItem)).toHaveLength(2);
  });

  it('renders link to next page with next pagination prop', () => {
    wrapper.setProps({ pagination: { next: 1 } });
    expect(wrapper.find(PaginationItem)).toHaveLength(2);
  });
});
