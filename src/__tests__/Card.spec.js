import Card from '../components/Card';

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
