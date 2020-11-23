export const increase = () => {
    return {
        type: "INCREASE"
    };
};

export const decrease = () => {
    return {
        type: "DECREASE"
    };
};


//////////////////////

export const newPost = (post) => {
    return {
        type: "NEW_POST",
        payload: post
    }
}

export const deletePost = () => {
    return {
        type: "DELETE_POST",
    }
}

export const deleteAll = () => {
    return {
        type: "DELETE_ALL",
    }
}

