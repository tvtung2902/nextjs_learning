'use server'
export async function cre(formData: FormData) {
    const title = formData.get("title");
    console.log("title: ", title);
    return null;
}

export async function func(prevState) {
    await new Promise((resolve) => setTimeout(resolve, 111)); // Giả lập gọi API
    return null;
}
export async function incrementLike() {
    console.log("call api...");
}