interface button {
    id: string,
    name: string,
    type: "reset" | "button" | "reset" | undefined,
    content: string,
    mod: "focused" | "disabled"| undefined
}

export {
    type button
}