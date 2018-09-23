import Spinner from '../components/Spinner';

describe('<Spinner />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toHaveLength(1);
  });
});
