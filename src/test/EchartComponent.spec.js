import { test, expect } from 'vitest'
import { screen } from '@testing-library/svelte';
import { render } from '@testing-library/svelte';
import Chart from '../components/EchartCompoent.svelte';


test("Chart test div style", () => {
    const { container } = render(Chart, {
        props: {
            title: "test chart",
            data: [],
            refresh: 2000
        }
    });
    const chartId=screen.getByTestId('chartId');
    expect(chartId.textContent).toEqual('test chart')
    expect(container.firstChild.textContent).toEqual('test chart');
    expect(container.firstChild.style.width).toEqual("600px");
    expect(container.firstChild.style.height).toEqual("400px");
})

