import { App } from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<App fetchPokemons={mockFunc} />);
    expect(wrapper).toHaveLength(1);
  });
});
