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

export type LoginTypes = {
    email: string;
    password: string;
}

export type EmailVerifyTypes = {
    token?: string | null
    trans?: string | null
}

export type AdminTypes = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    superAdminUsername: string;
    superAdminPassword: string;
    role: string;
};

export type AnalyticsType = {
    startDate?: string;
    endDate?: string;
}

export type ContactType = {
    name: string;
    email: string;
    text: string;
}
