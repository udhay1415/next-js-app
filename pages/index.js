import Link from 'next/link'

const index = () => (
    <div>
        Index page
        <Link href="/about">
            <button>About</button>
        </Link>
    </div>
)

export default index;