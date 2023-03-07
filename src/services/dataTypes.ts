export type paymentTypes = {
    email: string
    subscriptionPlanName: string
}

export type tokenTypes = {
    email: string
    token?: string
    password?: string
    save?: boolean
}

export type RegisterTypes = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    transactionAccessCode: string | undefined
};

export type EmailVerifyTypes = {
    token?: string | null
    trans?: string | null
}
