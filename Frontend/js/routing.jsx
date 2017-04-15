/* ===============
 *  React Routing
 * =============== */

var React = require('react');
var { MemoryRouter } = require('react-router');
var {
    BrowserRouter,
    Route,
    Link
} = require('react-router-dom');

var One  = props => <p>One</p>;
var Two  = props => <p>Two</p>;
var Head = props => <header>Header</header>;

class Routing extends React.Component {

    constructor(props) {
        super(props);

        var router = this.determineRouting();

        this.state = { router };
    }

    componentDidMount() {

        var router = this.determineRouting();

        this.setState({ router });
    }

    determineRouting() {
        if (typeof document !== 'undefined' && document) return BrowserRouter;
        else return MemoryRouter;
    }

    render() {

        var Router = this.state.router;

        return (
            <Router 
                initialEntries={[this.props.path]}
                initialIndex={0}
            >
                <div>
                    <Head />
                    <Route exact path="/" component={One} />
                    <Route path="/two" component={Two} />
                </div>
            </Router>
        );
    }
}

module.exports = Routing;
