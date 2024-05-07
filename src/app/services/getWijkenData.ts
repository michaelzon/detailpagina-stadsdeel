"use server";

interface Data {
    name: string
}

export const getWijkenData = async () => {
    let data: Data | undefined = undefined;
    let isError = false;
    let error = "";

    try {
        const res = await fetch("https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West");
        data = await res.json();
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = error
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    };


    return { data, isError, error}

};



