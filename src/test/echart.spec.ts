import { test, expect,describe } from 'vitest'
import { screen } from '@testing-library/svelte';
import { render } from '@testing-library/svelte';
import comp from '../pages/echart/+page.svelte';
import {onMount} from 'svelte'
describe("",()=>{
    test("echar test container div ", () => {
        const { container } = render(comp)
        const parentDiv = screen.getByTestId("echart-container")
        expect(parentDiv.classList).toContain("flex")
    })
})

test("echart test onmount",()=>{
    const { container } = render(comp)
    onMount(container);
})

test('echart test get EchartCompoent attributes',()=>{
    const { container } = render(comp)
    console.log("333",container.lastChild.firstChild.title)
    console.log("333",container.lastChild.firstChild.data)
    console.log("333",container.lastChild.firstChild.refresh)
})


test('echart test get EchartCompoent attributes',()=>{
    const { container } = render(comp)
    console.log("333",container.firstChild.firstChild.title)
    console.log("333",container.firstChild.firstChild.data)
    console.log("333",container.firstChild.firstChild.refresh)
})