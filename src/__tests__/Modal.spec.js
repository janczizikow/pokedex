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
});
