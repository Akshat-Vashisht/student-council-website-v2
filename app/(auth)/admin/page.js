import Layout from "@components/Admin/Layout";
import Table from "@components/Admin/Table";
import { SignOutButton } from "@clerk/nextjs";

export default function Page(){
    return(
        <Layout>
            <SignOutButton/>
            <div className="">
                <Table/>
            </div>
        </Layout>
    )
}