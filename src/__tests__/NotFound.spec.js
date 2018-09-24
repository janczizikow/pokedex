import NotFound from '../components/NotFound';

describe('<NotFound />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toHaveLength(1);
  });
});
