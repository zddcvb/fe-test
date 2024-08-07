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
