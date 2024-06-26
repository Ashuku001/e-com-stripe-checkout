import Link from "next/link"
import Container from "@/components/ui/Container"
import MainNav from "@/components/MainNav"
import getCategories from "@/actions/get-categories"
import { NavbarActions } from "@/components/navbar-actions"
import { Category } from "@/types"


const Navbar = async () => {
    const data = await getCategories()
    const categories = data.categories
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar
