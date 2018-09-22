import CardImg from '../components/CardImg';

describe('<CardImg />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardImg src="str" alt="alt text" />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders img src according to prop', () => {
    expect(wrapper.find('img').props()).toHaveProperty('src', 'str');
  });

  it('renders img alt according to prop', () => {
    expect(wrapper.find('img').props()).toHaveProperty('alt', 'alt text');
  });
});
