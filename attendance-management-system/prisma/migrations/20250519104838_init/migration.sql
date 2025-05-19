-- CreateTable
CREATE TABLE "master_industries" (
    "id" SERIAL NOT NULL,
    "default_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "master_industries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_request_types" (
    "id" SERIAL NOT NULL,
    "default_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "master_request_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_request_statuses" (
    "id" SERIAL NOT NULL,
    "default_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "master_request_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_blood_groups" (
    "id" SERIAL NOT NULL,
    "default_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "master_blood_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_user_roles" (
    "id" SERIAL NOT NULL,
    "default_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "master_user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_user_statuses" (
    "id" SERIAL NOT NULL,
    "default_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "master_user_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "industry_id" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "working_hours" INTEGER NOT NULL,
    "closing_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "manager_id" INTEGER,
    "company_id" INTEGER,
    "role_id" INTEGER,
    "status_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profile_details" (
    "id" SERIAL NOT NULL,
    "profile_pic" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "doj" TIMESTAMP(3) NOT NULL,
    "blood_group_id" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "designation_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "user_profile_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "designations" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "designations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "clock_in" TIMESTAMP(3) NOT NULL,
    "clock_out" TIMESTAMP(3) NOT NULL,
    "remote" BOOLEAN NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "request_type_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "approved_by" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "full_day" BOOLEAN NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policies" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "auto_checkout_enabled" BOOLEAN NOT NULL,
    "auto_checkout_time" TIMESTAMP(3) NOT NULL,
    "time_format" TEXT NOT NULL,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holidays" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "holidays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_allocations" (
    "id" SERIAL NOT NULL,
    "request_type_id" INTEGER NOT NULL,
    "default_days" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "company_allocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_leave" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "leave_type_id" INTEGER NOT NULL,
    "allocated" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    "remaining" INTEGER NOT NULL,

    CONSTRAINT "user_leave_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_details_user_id_key" ON "user_profile_details"("user_id");

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "master_industries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "master_user_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "master_user_statuses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_details" ADD CONSTRAINT "user_profile_details_blood_group_id_fkey" FOREIGN KEY ("blood_group_id") REFERENCES "master_blood_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_details" ADD CONSTRAINT "user_profile_details_designation_id_fkey" FOREIGN KEY ("designation_id") REFERENCES "designations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_details" ADD CONSTRAINT "user_profile_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "designations" ADD CONSTRAINT "designations_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_request_type_id_fkey" FOREIGN KEY ("request_type_id") REFERENCES "master_request_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "master_request_statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policies" ADD CONSTRAINT "policies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holidays" ADD CONSTRAINT "holidays_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_allocations" ADD CONSTRAINT "company_allocations_request_type_id_fkey" FOREIGN KEY ("request_type_id") REFERENCES "master_request_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_allocations" ADD CONSTRAINT "company_allocations_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_leave" ADD CONSTRAINT "user_leave_leave_type_id_fkey" FOREIGN KEY ("leave_type_id") REFERENCES "master_request_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_leave" ADD CONSTRAINT "user_leave_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
