import Link from 'next/link'

export default function DashboardNav({ children }) {
    return <header>
    <Link href="" >
        <div className="profile">
        <div className="profile__pic"></div>
        <div className="profile__name">
            <p>John Doe</p>
        </div>
        </div>
    </Link>
    <div className="waves-effect waves-light btn">Log Out</div>
</header>

    
  }