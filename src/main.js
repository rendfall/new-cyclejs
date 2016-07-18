import Cycle from '@cycle/xstream-run';
import { div, label, input, hr, h1, makeDOMDriver } from '@cycle/dom';

function main(sources) {
    var $myInput = sources.DOM.select('.myinput');

    return {
        DOM: $myInput.events('input')
            .map(ev => ev.target.value)
            .startWith('')
            .map(name =>
                div([
                    label('Name:'),
                    input('.myinput', {attrs: {type: 'text'}}),
                    hr(),
                    h1(`Hello ${name}`)
                ])
            )
    };
}

let drivers = {
    DOM: makeDOMDriver('#main-container')
};

Cycle.run(main, drivers);
