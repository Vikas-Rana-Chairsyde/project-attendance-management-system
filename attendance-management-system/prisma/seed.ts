import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();
async function main() {
    const designation = ['Senior Manager', 'Consultant', 'Intern']
    const bloodGroups = [
        { default_name: 'A+', display_name: 'A+' },
        { default_name: 'A-', display_name: 'A-' },
        { default_name: 'B+', display_name: 'B+' },
        { default_name: 'B-', display_name: 'B-' },
        { default_name: 'AB+', display_name: 'AB+' },
        { default_name: 'AB-', display_name: 'AB-' },
        { default_name: 'O+', display_name: 'O+' },
        { default_name: 'O-', display_name: 'O-' }
    ];
    const roles = ['admin', 'employee', 'hr', 'manager'];
    const roleData = roles.map((role) => ({
        default_name : role,
        display_name :role.charAt(0).toUpperCase() + role.slice(1),
    }));
    await prisma.master_user_roles.createMany({
        data: roleData,
    });
    console.log("master_user_roles done");
    await prisma.master_industries.createMany({
        data: [
            {
                default_name: 'Information Technology',
                display_name: 'Information Technology'
            },
            {
                default_name: 'Education',
                display_name: 'Education'
            },
            {
                default_name: 'HR',
                display_name: 'HR'
            },
            {
                default_name: 'Software Development',
                display_name: 'Software Development'
            }
        ]

    });
    console.log("master_industries done");
    await prisma.master_user_statuses.createMany({
        data: [
            {
                default_name: 'active',
                display_name: 'Active'
            },
            {
                default_name: 'inactive',
                display_name: 'Inactive'
            },
        ]
    });
    console.log("master_user_statuses done");
    await prisma.master_request_types.createMany({
        data: [
            {
                default_name: 'Sick Leave',
                display_name: 'Sick Leave'
            },
            {
                default_name: 'Paternity Leave',
                display_name: 'Paternity Leave'
            },
            {
                default_name: 'Maternity Leave',
                display_name: 'Maternity Leave'
            },
            {
                default_name: 'Earned Leave',
                display_name: 'Earned Leave'
            }
        ]

    });
    console.log("aster_request_types done");
    await prisma.master_request_statuses.createMany({
        data: [
            {
                default_name: 'approved',
                display_name: 'approved'
            },
            {
                default_name: 'rejected',
                display_name: 'rejected'
            },
            {
                default_name: 'pending',
                display_name: 'pending'
            },
            {
                default_name: 'cancelled',
                display_name: 'cancelled'
            }]
    });
    console.log("master_request_statuses done");
    await prisma.master_blood_groups.createMany({
        data: bloodGroups
    });
    console.log("master_blood_groups done");
    await prisma.companies.createMany({
        data: [
            {
                name: 'poplify',
                industry_id: 1,
                size: 0,
                address: "sector 8 panchkula",
                working_hours: 9,
                closing_time: new Date("2025-05-18T19:30:00Z")
            },
        ]
    });
    console.log("companies done");
    await prisma.users.createMany({
        data: [
            {
                name: 'Nisha',
                email: 'nisha+@google.com',
                password: 'nisha#12',
                manager_id: undefined,
                company_id: 1,
                role_id: 2,
                status_id: 1
            },
        ]
    });
    console.log("users done");
    await prisma.holidays.createMany({
        data: [
            {
                company_id: 1,
                title: 'Good Friday',
                date: new Date("2025-04-18"),
                description: "Good Friday is a Christian holiday that commemorates the crucifixion of Jesus Christ. The holiday has biblical roots and is based on the story of Judas Iscariot betraying Jesus and the story of Pontius Pilate sentencing Jesus to death."
            }
        ]
    });
    console.log("holidays done");
    await prisma.company_allocations.createMany({
        data: [
            {
                request_type_id: 2,
                default_days: 0,
                company_id: 1
            }
        ]
    });
    console.log("company_allocations done");
    designation.forEach(async (designation) => {
        await prisma.designations.create({
            data: {
                company_id: 1,
                name: designation
            }
        })
    });
    console.log("designation done");
    await prisma.attendances.createMany({
        data: [{
            user_id: 1,
            date: new Date(),
            clock_in: new Date('2025-05-19T09:00:00Z'),
            clock_out: new Date('2025-05-19T17:00:00Z'),
            remote: false
        }]
    });
    console.log("attendance done");
    await prisma.requests.createMany({
        data: [{
            request_type_id: 3,
            user_id: 1,
            from: new Date("2025-05-20"),
            to: new Date("2025-05-22"),
            approved_by: 1,
            status_id: 3,
            reason: "I have cold and fever",
            full_day: false
        }]
    });
    console.log("requests done");
    await prisma.policies.createMany({
        data: [{
            company_id: 1,
            auto_checkout_enabled: false,
            auto_checkout_time: new Date('1970-01-01T00:00:00Z'),
            time_format: "12hr"
        }]
    });
    console.log("policies done");
    await prisma.user_leave.createMany({
        data: [{
            user_id: 1,
            leave_type_id: 3,
            allocated: 2,
            used: 1,
            remaining: 1
        }]
    });
    console.log("userLeave done");
    await prisma.user_profile_details.createMany({
        data: [
            {
                profile_pic: "",
                phone_no: "1234567890",
                dob: new Date("2000-02-20"),
                doj: new Date("2025-01-02"),
                blood_group_id: 3,
                address: "sector 18 panchkula",
                designation_id: 1,
                user_id: 1
            }]
    });
    console.log("userProfileDetails done");
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });



