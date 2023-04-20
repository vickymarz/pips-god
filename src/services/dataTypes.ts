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
    userRole?: "admin" | "user"
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
    fullName: string;
    email: string;
    message: string;
}

export type AddModuleType = {
  courseResources: {
    description?: string,
    type: string,
    url: string | React.ReactNode,
    thumbnail?: string | Blob
  }[],
  courseModule: {
    title: string,
    description?: string,
    tags: string
    courseId: number
  }
}

export type UpdateModuleType = {
  courseResources: {
    id?: number,
    description?: string,
    type: string,
    url: string | React.ReactNode,
    thumbnail?: string | Blob
  }[],
  courseModule: {
    title: string,
    description?: string,
    tags: string
    courseModuleId?: number
  }
}

export type RolesTypes = {
  email: string
  role: 'admin' | 'user'
}
