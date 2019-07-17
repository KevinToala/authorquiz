import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

interface HelloProps {
    now: string;
}

class Hello extends Component<HelloProps> {

    render(): React.ReactElement {
        return <h1>Hello at {this.props.now}</h1>;
    }
}

const moment = new Date(123456);

describe('When testing directly', () => {
    let result: Hello;

    beforeAll(() => {
        result = new Hello({now: moment.toISOString()});
    });

    it('return a value', () => {
       expect(result).not.toBeNull();
    });

    it('is a h1', () => {
       expect(result.render().type).toBe("h1");
    });

    it('has not children', () => {
       expect(result.props.children).not.toBeTruthy();
    });
});

describe('When testing with ReactDOM', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hello now={moment.toISOString()} />, div);
    });
});

Enzyme.configure({ adapter: new Adapter() });

describe('When testing with Enzyme', () => {
    it('renders a h1', () => {
       const  wrapper = shallow(<Hello now={moment.toISOString()} />);
       expect(wrapper.find('h1').length).toBe(1);
    });

    it('contains hello at moment', () => {
        const  wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.contains(<h1>Hello at {moment.toISOString()}</h1>)).toBe(true);
    });
});