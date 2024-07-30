export function user(): types.Card.User {
    return {
        firstName: '111',
        lastName: '',
        title: '',
        yourPhoto: null,
        address: '',
        phoneNumber: '',
        Email: '',
        desciption: '',
    };
}
export function experience(): types.Card.Experience {
    return {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
    };
}

export function education(): types.Card.Education {
    return {
        'university name': '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
    };
}
