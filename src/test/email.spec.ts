import { test, expect, describe } from 'vitest'
import { screen, fireEvent, render } from '@testing-library/svelte';
import EmailComponent from '../pages/email/+page.svelte';


describe('email test send btn and back btn', () => {
    const { container } = render(EmailComponent);
    test("email check input tag value", () => {
        const fromId = screen.getByTestId("fromId");
        const toId = screen.getByTestId("toId");
        const ccId = screen.getByTestId("ccId");
        const bccId = screen.getByTestId("bccId");
        const subjectId = screen.getByTestId("subjectId");
        const bodyId = screen.getByTestId("bodyId");
        fromId.textContent = "zddcvb@163.com";
        toId.textContent = "136089378@163.com";
        ccId.textContent = "136089378@163.com";
        bccId.textContent = "136089378@163.com";
        subjectId.textContent = "subject-test";
        bodyId.textContent = "hello";
        expect(fromId.textContent).toContain("zddcvb@163.com");
        expect(toId.textContent).toContain("136089378@163.com");
        expect(ccId.textContent).toContain("136089378@163.com");
        expect(bccId.textContent).toContain("136089378@163.com");
        expect(subjectId.textContent).toContain("subject-test");
        expect(bodyId.textContent).toContain("hello");
    })
})

test("email test click send btn", async () => {
    const sendBtn = await screen.getByTestId('sendBtn')
    fireEvent.click(sendBtn)
    const msgId = await screen.getByTestId("msgId");
    expect(msgId.textContent).toEqual("current input has empty feild!")
    sendBtn.click();
})

test("email test click back btn", async () => {
    const backBtn = await screen.getByTestId('backBtn');
    fireEvent.click(backBtn)
    const msgId = await screen.getByTestId("msgId");
    expect(msgId.textContent).toEqual("back success")
})

