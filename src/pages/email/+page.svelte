<script lang="ts">
    import { validateFeild } from "../../utils/validate-utils";
    function back() {
        history.go(-1);
        formItem.msg = "back success";
    }
    let formItem = {
        emailFrom: "",
        emailTo: "",
        ccTo: "",
        bccTo: "",
        subject: "",
        body: "",
        msg: "",
    };
    // send mail
    async function sendEmail() {
        formItem.msg = "";
        let isFrom = validateFeild(formItem.emailFrom, formItem.msg);
        let isTo = validateFeild(formItem.emailTo, formItem.msg);
        let isSubject = validateFeild(formItem.subject, formItem.msg);
        let isBody = validateFeild(formItem.body, formItem.msg);
        if (isFrom && isTo && isSubject && isBody) {
            let recipients = formItem.emailTo + ",";
            const mailToLink = `mailto:${recipients}?subject=${encodeURIComponent(formItem.subject)}&body=${encodeURIComponent(formItem.body)}&cc=${formItem.ccTo}&bcc=${formItem.bccTo}`;
            window.open(mailToLink);
            return true;
        }
        formItem.msg = "current input has empty feild!";
        return false;
    }
</script>

<main class="bg-gray-500 h-screen p-10">
    <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <div class="p-4">
            <h1 class="text-2xl text-gray-700">Email</h1>
            <form class="mt-4 space-y-4">
                <div>
                    <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="emailFrom">From</label
                    >
                    <input
                        class="w-full px-3 py-2 border rounded-lg text-gray-700"
                        type="email"
                        id="emailFrom"
                        name="emailFrom"
                        data-testid="fromId"
                        bind:value={formItem.emailFrom}
                    />
                </div>
                <div>
                    <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="emailTo">To</label
                    >
                    <input
                        class="w-full px-3 py-2 border rounded-lg text-gray-700"
                        type="email"
                        id="emailTo"
                        name="emailTo"
                        data-testid="toId"
                        bind:value={formItem.emailTo}
                    />
                </div>
                <div>
                    <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="ccTo">CC-To</label
                    >
                    <input
                        class="w-full px-3 py-2 border rounded-lg text-gray-700"
                        type="email"
                        id="ccTo"
                        name="ccTo"
                        data-testid="ccId"
                        bind:value={formItem.ccTo}
                    />
                </div>
                <div>
                    <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="bccTo">BCC-To</label
                    >
                    <input
                        class="w-full px-3 py-2 border rounded-lg text-gray-700"
                        type="email"
                        id="bccTo"
                        name="bccTo"
                        data-testid="bccId"
                        bind:value={formItem.bccTo}
                    />
                </div>
                <div>
                    <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="subject">Subject</label
                    >
                    <input
                        class="w-full px-3 py-2 border rounded-lg text-gray-700"
                        type="text"
                        id="subject"
                        name="subject"
                        data-testid="subjectId"
                        bind:value={formItem.subject}
                    />
                </div>

                <div>
                    <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="body">Body</label
                    >
                    <textarea
                        class="w-full px-3 py-2 border rounded-lg text-gray-700"
                        rows="3"
                        id="body"
                        name="body"
                        data-testid="bodyId"
                        bind:value={formItem.body}
                    ></textarea>
                </div>
                <div>
                    <p
                        data-testid="msgId"
                        class="block mb-2 text-sm font-bold text-red-700"
                    >
                        {formItem.msg}
                    </p>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        type="button"
                        id="sendBtn"
                        data-testid="sendBtn"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        on:click={sendEmail}>Send</button
                    >
                    <button
                        type="button"
                        id="backBtn"
                        data-testid="backBtn"
                        class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                        on:click={back}>Back</button
                    >
                </div>
            </form>
        </div>
    </div>
</main>
