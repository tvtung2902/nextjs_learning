export default function Page() {
    async function cre(formData: FormData) {
        'use server'
        const rawFormData = {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
        };
        console.log("rawFormData:", rawFormData);
        // mutate data
        // revalidate cache

    }

    return (
        <form action={cre} method="post">
            <label>
                Customer ID:
                <input type="text" name="customerId" required />
            </label>
            <br />
            <label>
                Amount:
                <input type="number" name="amount" required />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
