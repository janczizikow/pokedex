import Modal from '../components/Modal';

describe('<Modal/>', () => {
  let mockCallback;
  let wrapper;

  beforeEach(() => {
    mockCallback = jest.fn();
    wrapper = shallow(<Modal isOpen={false} onRequestClose={mockCallback} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders pokemons', () => {
    wrapper.setProps({
      isOpen: true,
      pokemon: {
        id: 1,
        name: 'Bulbasaur',
        num: '001',
        img: 'TEST',
        type: ['Grass', 'Poison'],
        height: '0.71 m',
        weight: '6.9 kg',
        candy: 'Bulbasaur Candy',
        candy_count: 25,
        egg: '2 km',
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: '20:00',
        weaknesses: ['Fire'],
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
