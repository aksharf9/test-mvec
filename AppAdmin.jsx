import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateAdminRoute from "./components/PrivateAdminRoute";

// Login
import AdminLogin from './pages/Admin/AdminLogin';

// Dashboard
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";

// Vendor Management
import VendorList from "./pages/Admin/VendorManagement/VendorList";
import VendorDetails from "./pages/Admin/VendorManagement/VendorDetails";

// Customer Management
import CustomerList from "./pages/Admin/CustomerManagement/CustomerList";
import CustomerDetails from "./pages/Admin/CustomerManagement/CustomerDetails";

// Product Management
import ProductList from "./pages/Admin/ProductManagement/ProductList";
import CategoryList from "./pages/Admin/ProductManagement/CategoryList";
import AttributeList from "./pages/Admin/ProductManagement/AttributeList";
import ProductApprovalQueue from "./pages/Admin/ProductManagement/ProductApprovalQueue";
import ProductReviewList from "./pages/Admin/ProductManagement/ProductReviewList";

// Order Management
import OrderList from "./pages/Admin/OrderManagement/OrderList";
import OrderDetails from "./pages/Admin/OrderManagement/OrderDetails";

// Finance & Payouts
import PlatformEarnings from "./pages/Admin/Finance&Payouts/PlatformEarnings";
import CommissionReports from "./pages/Admin/Finance&Payouts/CommissionReports";
import VendorPayouts from "./pages/Admin/Finance&Payouts/VendorPayouts";
import TransactionLogs from "./pages/Admin/Finance&Payouts/TransactionLogs";

// Platform Settings
import GeneralSettings from "./pages/Admin/PlatformSettings/GeneralSettings";
import PaymentGateways from "./pages/Admin/PlatformSettings/PaymentGateways";
import ShippingMethods from "./pages/Admin/PlatformSettings/ShippingMethods";
import TaxesSettings from "./pages/Admin/PlatformSettings/TaxSettings";
import EmailTemplates from "./pages/Admin/PlatformSettings/EmailTemplates";
import Currencies from "./pages/Admin/PlatformSettings/CurrencySettings";
import Languages from "./pages/Admin/PlatformSettings/LanguageSettings";

// Marketing & Promotions
import PlatformCoupons from "./pages/Admin/Marketing/PlatformCoupons";
import NewsletterManagement from "./pages/Admin/Marketing/NewsletterManager";

// Content Management
import CMSPages from "./pages/Admin/ContentManagement/PagesCMS";
import BlogManagement from "./pages/Admin/ContentManagement/BlogManager";

// Reports & Analytics
import SalesReports from "./pages/Admin/Reports/SalesReports";
import TrafficAnalytics from "./pages/Admin/Reports/TrafficAnalytics";
import VendorPerformanceReports from "./pages/Admin/Reports/VendorPerformance";

// System & Support
import AdminUserRoles from "./pages/Admin/System&Support/AdminUsers";
import SupportTickets from "./pages/Admin/System&Support/SupportTickets";
import SystemLogs from "./pages/Admin/System&Support/SystemLogs";

function AppAdmin() {
  return (
    <Routes>
      {/* Login (unprotected) */}
      <Route path="login" element={<AdminLogin />} />

      {/* Dashboard */}
      <Route path="dashboard" element={<PrivateAdminRoute><AdminDashboard /></PrivateAdminRoute>} />

      {/* Vendor Management */}
      <Route path="vendors" element={<PrivateAdminRoute><VendorList /></PrivateAdminRoute>} />
      <Route path="vendordetails/:id" element={<PrivateAdminRoute><VendorDetails /></PrivateAdminRoute>} />

      {/* Customer Management */}
      <Route path="customers" element={<PrivateAdminRoute><CustomerList /></PrivateAdminRoute>} />
      <Route path="customerdetails/:id" element={<PrivateAdminRoute><CustomerDetails /></PrivateAdminRoute>} />

      {/* Product Management */}
      <Route path="products" element={<PrivateAdminRoute><ProductList /></PrivateAdminRoute>} />
      <Route path="categories" element={<PrivateAdminRoute><CategoryList /></PrivateAdminRoute>} />
      <Route path="attributes" element={<PrivateAdminRoute><AttributeList /></PrivateAdminRoute>} />
      <Route path="productapprovals" element={<PrivateAdminRoute><ProductApprovalQueue /></PrivateAdminRoute>} />
      <Route path="productreviews" element={<PrivateAdminRoute><ProductReviewList /></PrivateAdminRoute>} />

      {/* Order Management */}
      <Route path="orders" element={<PrivateAdminRoute><OrderList /></PrivateAdminRoute>} />
      <Route path="orderdetails/:id" element={<PrivateAdminRoute><OrderDetails /></PrivateAdminRoute>} />

      {/* Finance & Payouts */}
      <Route path="finance" element={<PrivateAdminRoute><PlatformEarnings /></PrivateAdminRoute>} />
      <Route path="commissions" element={<PrivateAdminRoute><CommissionReports /></PrivateAdminRoute>} />
      <Route path="payouts" element={<PrivateAdminRoute><VendorPayouts /></PrivateAdminRoute>} />
      <Route path="transactions" element={<PrivateAdminRoute><TransactionLogs /></PrivateAdminRoute>} />

      {/* Platform Settings */}
      <Route path="settings/general" element={<PrivateAdminRoute><GeneralSettings /></PrivateAdminRoute>} />
      <Route path="settings/payments" element={<PrivateAdminRoute><PaymentGateways /></PrivateAdminRoute>} />
      <Route path="settings/shipping" element={<PrivateAdminRoute><ShippingMethods /></PrivateAdminRoute>} />
      <Route path="settings/taxes" element={<PrivateAdminRoute><TaxesSettings /></PrivateAdminRoute>} />
      <Route path="settings/emails" element={<PrivateAdminRoute><EmailTemplates /></PrivateAdminRoute>} />
      <Route path="settings/currencies" element={<PrivateAdminRoute><Currencies /></PrivateAdminRoute>} />
      <Route path="settings/languages" element={<PrivateAdminRoute><Languages /></PrivateAdminRoute>} />

      {/* Marketing & Promotions */}
      <Route path="marketing/coupons" element={<PrivateAdminRoute><PlatformCoupons /></PrivateAdminRoute>} />
      <Route path="marketing/newsletter" element={<PrivateAdminRoute><NewsletterManagement /></PrivateAdminRoute>} />

      {/* Content Management */}
      <Route path="cms/pages" element={<PrivateAdminRoute><CMSPages /></PrivateAdminRoute>} />
      <Route path="cms/blog" element={<PrivateAdminRoute><BlogManagement /></PrivateAdminRoute>} />

      {/* Reports & Analytics */}
      <Route path="reports/sales" element={<PrivateAdminRoute><SalesReports /></PrivateAdminRoute>} />
      <Route path="reports/traffic" element={<PrivateAdminRoute><TrafficAnalytics /></PrivateAdminRoute>} />
      <Route path="reports/vendorperformance" element={<PrivateAdminRoute><VendorPerformanceReports /></PrivateAdminRoute>} />

      {/* System & Support */}
      <Route path="system/users" element={<PrivateAdminRoute><AdminUserRoles /></PrivateAdminRoute>} />
      <Route path="system/tickets" element={<PrivateAdminRoute><SupportTickets /></PrivateAdminRoute>} />
      <Route path="system/logs" element={<PrivateAdminRoute><SystemLogs /></PrivateAdminRoute>} />

      {/* Fallback: Redirect any unknown admin route to dashboard */}
      <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
  );
}

export default AppAdmin;
